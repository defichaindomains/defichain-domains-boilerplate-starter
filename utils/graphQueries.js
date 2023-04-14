import { gql } from "@apollo/client";

export const ALL_ACTIVE_LISTINGS_QUERY = gql`
  query Listings {
    listings(
      where: { listingStatus: "active", endTime_gt: ${Math.round(
        Date.now() / 1000
      )} }
    ) {
      id
      tokenOwner
      assetContract
      tokenId
      buyoutPricePerToken
      listingType
      endTime
    }
  }
`;

export const USER_ACTIVE_LISTINGS_QUERY = gql`
  query Listings($address: String!) {
    listings(where: { listingStatus: "active", tokenOwner: $address, , endTime_gt: ${Math.round(
      Date.now() / 1000
    )} }) {
      id
      tokenOwner
      assetContract
      tokenId
      buyoutPricePerToken
      listingType
      endTime
    }
  }
`;

export const ACTIVE_LISTINGS_DETAILS_BY_TOKENID = gql`
  query Listings($tokenId: BigInt!) {
    listings(where: { listingStatus: "active", tokenId: $tokenId, , endTime_gt: ${Math.round(
      Date.now() / 1000
    )}}) {
      id
      tokenId
      tokenOwner
      startTime
      endTime
      quantity      
      currency
      reservePricePerToken
      buyoutPricePerToken
      tokenType
      listingType
      listingStatus
      
    }
  }
`;

export const ACTIVE_LISTINGS_DETAILS_BY_LISTINGID = gql`
  query Listings($id: String!) {
    listings(where: { listingStatus: "active", id: $id }) {
      id
      tokenId
      tokenOwner
      startTime
      endTime
      quantity
      currency
      reservePricePerToken
      buyoutPricePerToken
      tokenType
      listingType
      listingStatus
    }
  }
`;

export const USER_OWNED_NFTS = gql`
  query Domains($address: String!) {
    domains(where: { owner: $address, parent_: { name: "dfi" } }) {
      id
      name
      labelhash
      parent {
        name
      }
    }
  }
`;
