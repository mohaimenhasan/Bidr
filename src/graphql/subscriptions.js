/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFavorite = /* GraphQL */ `
  subscription OnCreateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onCreateFavorite(filter: $filter) {
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
export const onUpdateFavorite = /* GraphQL */ `
  subscription OnUpdateFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onUpdateFavorite(filter: $filter) {
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
export const onDeleteFavorite = /* GraphQL */ `
  subscription OnDeleteFavorite($filter: ModelSubscriptionFavoriteFilterInput) {
    onDeleteFavorite(filter: $filter) {
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
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid($filter: ModelSubscriptionBidFilterInput) {
    onCreateBid(filter: $filter) {
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
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid($filter: ModelSubscriptionBidFilterInput) {
    onUpdateBid(filter: $filter) {
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
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid($filter: ModelSubscriptionBidFilterInput) {
    onDeleteBid(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
