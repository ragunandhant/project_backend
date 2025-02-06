import { pgTable, text,timestamp,date,doublePrecision,index, uuid } from "drizzle-orm/pg-core";


export const races = pgTable("races", {

    id: uuid('id').notNull().primaryKey().defaultRandom(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    date: date('date').notNull(),
    location: text('location').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(() => new Date()),

})

export const categories = pgTable("categories", {
    
    id: uuid('id').notNull().primaryKey().defaultRandom(),
    name: text('name').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
    raceId : uuid('raceId').notNull().references(()=>races.id)

})

export const entries = pgTable("entries", {
    id : uuid('id').notNull().primaryKey().defaultRandom(),
    name1 : text('name1').notNull(),
    name2 : text('name2'),
    cartno :text('cartno').notNull(),
    time : doublePrecision('time').notNull(),
    created_at: timestamp('created_at').notNull().defaultNow(),
    updated_at: timestamp('updated_at', { mode: 'date', precision: 3 }).$onUpdate(() => new Date()),
    categoriesId : uuid('categoriesId').notNull().references(()=>categories.id)
},(table)=>[index("entries_categoriesId_index").on(table.categoriesId)]
)