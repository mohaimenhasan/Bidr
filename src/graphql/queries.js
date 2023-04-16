/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFavorite = /* GraphQL */ `
  query GetFavorite($id: ID!) {
    getFavorite(id: $id) {
      id
      listingId
      user {
        id
        name
        email
        bids {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listFavorites = /* GraphQL */ `
  query ListFavorites(
    $id: ID
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFavorites(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        listingId
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
      id
      property
      biddingPrice
      endDate
      user {
        id
        name
        email
        bids {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      createdAt
      updatedAt
    }
  }
`;
export const listBids = /* GraphQL */ `
  query ListBids(
    $id: ID
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBids(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        property
        biddingPrice
        endDate
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      bids {
        items {
          id
          property
          biddingPrice
          endDate
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      favorites {
        items {
          id
          listingId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        email
        bids {
          nextToken
        }
        favorites {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const favoritesByUserId = /* GraphQL */ `
  query FavoritesByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelFavoriteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    favoritesByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        listingId
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const bidsByUserId = /* GraphQL */ `
  query BidsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    bidsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        property
        biddingPrice
        endDate
        user {
          id
          name
          email
          createdAt
          updatedAt
        }
        userId
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
