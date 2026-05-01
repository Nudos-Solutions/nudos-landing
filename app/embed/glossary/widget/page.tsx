import { glossaryTerms } from "@/content/glossary"

export default function GlossaryWidget() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0a; color: #f5f5f5; padding: 16px; }
          .header { display: flex; align-items: center; gap: 8px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #222; }
          .header-title { font-size: 14px; font-weight: 600; }
          .header-link { font-size: 11px; color: #1f6aff; text-decoration: none; margin-left: auto; }
          .header-link:hover { text-decoration: underline; }
          .term { margin-bottom: 16px; }
          .term-name { font-size: 13px; font-weight: 600; margin-bottom: 4px; }
          .term-def { font-size: 12px; color: rgba(245,245,245,0.6); line-height: 1.5; }
          .footer { margin-top: 16px; padding-top: 12px; border-top: 1px solid #222; text-align: center; }
          .footer a { font-size: 11px; color: #1f6aff; text-decoration: none; }
          .footer a:hover { text-decoration: underline; }
        `}</style>
      </head>
      <body>
        <div className="header">
          <span className="header-title">Marine Insurance Glossary</span>
          <a className="header-link" href="https://www.nudos.app/glossary" target="_blank" rel="noopener noreferrer">
            View full glossary →
          </a>
        </div>
        {glossaryTerms.map((term) => (
          <div key={term.slug} className="term">
            <div className="term-name">{term.term}</div>
            <div className="term-def">{term.definition}</div>
          </div>
        ))}
        <div className="footer">
          <a href="https://www.nudos.app" target="_blank" rel="noopener noreferrer">
            Powered by NUDOS — AI Marine Insurance Infrastructure
          </a>
        </div>
      </body>
    </html>
  )
}
