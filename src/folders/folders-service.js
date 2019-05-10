const FoldersService = {
  getAllFolders(knex) {
    return knex.select('*').from('folders')
  },
  insertFolder(knex, newFolder) {
    return knex
      .insert(newFolder)
      .into('folders')
      .returning('*')
      .then(rows => {
        return rows[0]
    })
  },
  getById(knex, id) {
    return knex
      .from('folders')
      .select('*')
      .where({ id })
      .first()
  },
  deleteFolder(knex, id) {
    return knex('folders')
      .where({ id })
      .del()
  },
  updateFolder(knex, id, newFolderInput) {
    return knex('folders')
      .where({ id })
      .update(newFolderInput)
  }
}

module.exports = FoldersService