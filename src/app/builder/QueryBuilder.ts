import { Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search(searchedField: string[]) {
    const search = this?.query?.search;
    if (search) {
      this.modelQuery = this.modelQuery.find({
        $or: searchedField.map((field) => ({
          [field]: { $regex: search, $options: "i" },
        })),
      });
    }
    return this;
  }

  sort() {
    const sortBy = this?.query?.sortBy || "-createdAt";
    const sortOrder = this?.query?.sortOrder === "desc" ? "-" : "";

    const sort = `${sortOrder}${sortBy}`;

    this.modelQuery = this.modelQuery.sort(sort);
    return this;
  }

  filter() {
    const filterBy = this?.query?.filter;
    this.modelQuery = this.modelQuery.find({ author: filterBy });
    return this;
  }
}

export default QueryBuilder;
