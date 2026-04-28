1. Secrets en GCP Secret Manager

  - Poblamos todos los secrets para nudos-dev (database-url, clerk keys,
   etc.)
  - El password de la DB con ! causaba error Prisma P1013 (port
  inválido) — se URL-encodeó como %21, luego se cambió a password sin
  caracteres especiales

  2. Database URL y usuario

  - gcloud sql users set-password se colgaba — requería
  --password="value" en vez de --prompt-for-password
  - Password mismatch entre Cloud SQL y Secret Manager — se alinearon
  ambos
  - Tablas owned por user nudos, no postgres — el DATABASE_URL usaba
  postgres y daba permission denied for table Organization. Se cambió a
  usar el user nudos

  3. Cloud Build

  - Frontend cloudbuild.yaml referenciaba repo nudos pero el real era
  nudos-repo — se corrigió

  4. Permisos Cloud Run

  - Compute service account sin secretmanager.secretAccessor — se agregó
   el IAM binding
  - Servicios requerían auth por default — se agregó allUsers con
  roles/run.invoker

  5. Frontend - Clerk redirect roto

  - Clerk detectaba HOSTNAME=0.0.0.0 del Dockerfile y redirigía ahí — se
   fijó agregando NEXT_PUBLIC_CLERK_DOMAIN=dev.nudos.app

  6. Frontend - Proxy 500s

  - BACKEND_URL no estaba como env var en Cloud Run — se agregó con
  --set-secrets y --set-env-vars
  - Next.js standalone bakes rewrites en routes-manifest.json al build
  time — el BACKEND_URL debe ir como build arg en cloudbuild.yaml

  7. Frontend - Missing CLERK_SECRET_KEY

  - El servicio Cloud Run no tenía env vars — se agregó
  --set-secrets="CLERK_SECRET_KEY=clerk-secret-key:latest"

  8. Backend - 403 Forbidden (el final boss)

  - Auth Clerk funcionaba (token válido) pero todas las rutas tiraban
  403
  - Causa: Organization not found or not yet synced via Clerk webhook —
  la tabla Organization estaba vacía
  - Se configuró CLERK_WEBHOOK_SECRET en Cloud Run
  - Se creó webhook endpoint en Clerk dashboard →
  https://api-dev.nudos.app/auth/webhook
  - Se seedeó manualmente la org (TestOrg), user (Crystal Quartz), y
  membership via Cloud Run jobs con psql

  9. DNS & SSL

  - CNAMEs en Vercel (dev.nudos.app, api-dev.nudos.app) →
  ghs.googlehosted.com
  - Domain mappings en Cloud Run con certificados managed por Google
  - /healthz daba 404 vía domain mapping (quirk de Google) pero funciona
   internamente

  ---
  Lección principal para prod: automatizar los env vars/secrets en los
  cloudbuild.yaml (paso --set-secrets y --set-env-vars en el deploy
  step) para que no se pierdan en cada redeploy. Y configurar el Clerk
  webhook desde el inicio.
