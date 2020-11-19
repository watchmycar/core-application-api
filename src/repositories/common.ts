
export class CommonRepository {
  Model

  constructor(model) {
    this.Model = model
  }

  save(payload) {
    return this.Model.query().insert(payload)
  }

  findOne(filter) {
    return this.Model.query().findOne(filter)
  }
}
