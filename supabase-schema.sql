-- ================================================================
-- BluMentis — Schema Supabase v3 (con UTM, session_id, funnel)
-- Esegui nell'SQL Editor: supabase.com → progetto → SQL Editor
-- ================================================================

CREATE TABLE IF NOT EXISTS events (
  id           UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  event_name   TEXT        NOT NULL,
  page         TEXT,
  label        TEXT,
  metadata     JSONB       DEFAULT '{}',
  country      TEXT,           -- ISO 3166-1 alpha-2 via Vercel header
  referrer     TEXT,           -- URL sorgente (fallback a UTM)
  session_id   TEXT,           -- ID sessione browser
  utm_source   TEXT,           -- es. google, linkedin, newsletter
  utm_medium   TEXT,           -- es. cpc, email, social
  utm_campaign TEXT,           -- es. q1-2025-awareness
  utm_term     TEXT,           -- keyword (campagne search)
  utm_content  TEXT,           -- variante creative (A/B)
  created_at   TIMESTAMPTZ DEFAULT NOW()
);

-- Indici per query frequenti
CREATE INDEX IF NOT EXISTS events_event_name_idx  ON events(event_name);
CREATE INDEX IF NOT EXISTS events_created_at_idx  ON events(created_at DESC);
CREATE INDEX IF NOT EXISTS events_country_idx     ON events(country);
CREATE INDEX IF NOT EXISTS events_utm_source_idx  ON events(utm_source);
CREATE INDEX IF NOT EXISTS events_session_id_idx  ON events(session_id);

-- Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Chiunque può inserire (tracking via /api/track)
CREATE POLICY "allow_insert" ON events
  FOR INSERT WITH CHECK (true);

-- Solo service_role può leggere (via API server)
CREATE POLICY "deny_anon_select" ON events
  FOR SELECT USING (false);

-- ================================================================
-- Se aggiorni una tabella esistente (esegui solo queste righe):
-- ================================================================
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS country      TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS referrer     TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS session_id   TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS utm_source   TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS utm_medium   TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS utm_campaign TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS utm_term     TEXT;
-- ALTER TABLE events ADD COLUMN IF NOT EXISTS utm_content  TEXT;
