CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX categories_slug_uniq ON categories (slug, account_id);

ALTER TABLE categories ENABLE ELECTRIC;
