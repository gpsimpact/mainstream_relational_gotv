export default `
  
  enum Direction { ASC, DESC }

  type PageInfo {
    nextCursor: String
    fromCache: Boolean
    totalCount: Int
  }

`;
