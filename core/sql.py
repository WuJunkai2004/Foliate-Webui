# use sqlite to store data
import sqlite3
import os

database_path = os.path.dirname(os.path.abspath(__file__)) + '/../assets/data.db'
need_init = not os.path.exists(database_path)

# the instance of the class, it is a singleton
sql = sqlite3.connect(f'{__file__}/../assets/data.db', check_same_thread=False)

if need_init:
    with sql:
        # create table, book shelf
        # name, author, cover, description, tags, last_read, last_update
        sql.execute('''
            CREATE TABLE IF NOT EXISTS book_shelf (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                author TEXT NOT NULL,
                cover TEXT NOT NULL,
                description TEXT NOT NULL,
                tags TEXT NOT NULL,
                last_read INTEGER NOT NULL DEFAULT 0,
                last_update INTEGER NOT NULL DEFAULT 0
            )
        ''')
        # create table, book marks
        # book_id, name, mark_position, color, last_update
        sql.execute('''
            CREATE TABLE IF NOT EXISTS book_marks (
                oid INTEGER PRIMARY KEY AUTOINCREMENT,
                book_id INTEGER NOT NULL,
                name TEXT NOT NULL,
                mark_position INTEGER NOT NULL,
                color TEXT NOT NULL,
                last_update INTEGER NOT NULL DEFAULT 0,
                FOREIGN KEY (book_id) REFERENCES book_shelf (id) ON DELETE CASCADE
            )
        ''')
        # create table, book shelves
        # name, description, book_ids
        sql.execute('''
            CREATE TABLE IF NOT EXISTS book_shelves (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                description TEXT NOT NULL,
                book_ids TEXT NOT NULL
            )
        ''')