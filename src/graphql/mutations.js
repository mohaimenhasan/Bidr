/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFavorite = /* GraphQL */ `
  mutation CreateFavorite(
    $input: CreateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    createFavorite(input: $input, condition: $condition) {
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
export const updateFavorite = /* GraphQL */ `
  mutation UpdateFavorite(
    $input: UpdateFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    updateFavorite(input: $input, condition: $condition) {
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
export const deleteFavorite = /* GraphQL */ `
  mutation DeleteFavorite(
    $input: DeleteFavoriteInput!
    $condition: ModelFavoriteConditionInput
  ) {
    deleteFavorite(input: $input, condition: $condition) {
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
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
