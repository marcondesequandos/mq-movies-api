export default class BaseEntity {
  private _id?: number;
  private _created_at: Date;
  private _updated_at: Date;

  constructor(id?: number, created_at?: Date, updated_at?: Date) {
    this._id = id;
    this._created_at = created_at || new Date();
    this._updated_at = updated_at || new Date();
  }

  get id(): number {
    return this._id;
  }

  get created_at(): Date {
    return this._created_at;
  }

  get updated_at(): Date {
    return this._updated_at;
  }

  set updated_at(updated_at: Date) {
    this._updated_at = updated_at;
  }
}
