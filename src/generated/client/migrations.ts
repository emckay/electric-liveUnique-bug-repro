export default [
  {
    "statements": [
      "CREATE TABLE \"categories\" (\n  \"id\" TEXT NOT NULL,\n  \"slug\" TEXT NOT NULL,\n  \"account_id\" TEXT NOT NULL,\n  CONSTRAINT \"categories_pkey\" PRIMARY KEY (\"id\")\n);\n",
      "CREATE UNIQUE INDEX \"categories_slug_uniq\" ON \"categories\" (\"slug\" ASC, \"account_id\" ASC);\n",
      "INSERT OR IGNORE INTO _electric_trigger_settings (namespace, tablename, flag) VALUES ('main', 'categories', 1);",
      "DROP TRIGGER IF EXISTS update_ensure_main_categories_primarykey;",
      "CREATE TRIGGER update_ensure_main_categories_primarykey\n  BEFORE UPDATE ON \"main\".\"categories\"\nBEGIN\n  SELECT\n    CASE\n      WHEN old.\"id\" != new.\"id\" THEN\n      \t\tRAISE (ABORT, 'cannot change the value of column id as it belongs to the primary key')\n    END;\nEND;",
      "DROP TRIGGER IF EXISTS insert_main_categories_into_oplog;",
      "CREATE TRIGGER insert_main_categories_into_oplog\n   AFTER INSERT ON \"main\".\"categories\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'categories')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'categories', 'INSERT', json_patch('{}', json_object('id', new.\"id\")), json_object('account_id', new.\"account_id\", 'id', new.\"id\", 'slug', new.\"slug\"), NULL, NULL);\nEND;",
      "DROP TRIGGER IF EXISTS update_main_categories_into_oplog;",
      "CREATE TRIGGER update_main_categories_into_oplog\n   AFTER UPDATE ON \"main\".\"categories\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'categories')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'categories', 'UPDATE', json_patch('{}', json_object('id', new.\"id\")), json_object('account_id', new.\"account_id\", 'id', new.\"id\", 'slug', new.\"slug\"), json_object('account_id', old.\"account_id\", 'id', old.\"id\", 'slug', old.\"slug\"), NULL);\nEND;",
      "DROP TRIGGER IF EXISTS delete_main_categories_into_oplog;",
      "CREATE TRIGGER delete_main_categories_into_oplog\n   AFTER DELETE ON \"main\".\"categories\"\n   WHEN 1 = (SELECT flag from _electric_trigger_settings WHERE namespace = 'main' AND tablename = 'categories')\nBEGIN\n  INSERT INTO _electric_oplog (namespace, tablename, optype, primaryKey, newRow, oldRow, timestamp)\n  VALUES ('main', 'categories', 'DELETE', json_patch('{}', json_object('id', old.\"id\")), NULL, json_object('account_id', old.\"account_id\", 'id', old.\"id\", 'slug', old.\"slug\"), NULL);\nEND;"
    ],
    "version": "1"
  }
]