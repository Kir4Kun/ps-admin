import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Comment = {
  __typename?: 'Comment';
  /** Activity of the comment. */
  activity: CommentActivity;
  /** Text content  of the user. */
  content?: Maybe<Scalars['String']>;
  /** Creation date of comment */
  createdAt: Scalars['DateTime'];
  /** Id of  the post. */
  id: Scalars['ID'];
  isLiked: Scalars['Boolean'];
  /** Updation date of comment */
  updatedAt: Scalars['DateTime'];
  /**  User of the post who owns the post. */
  user: ShortUser;
};

export type CommentActivity = {
  __typename?: 'CommentActivity';
  likesCount: Scalars['Float'];
  repliesCount: Scalars['Float'];
};

export type CoverImage = {
  __typename?: 'CoverImage';
  hash: Scalars['String'];
  url: Scalars['String'];
};

export type CreateCommentInput = {
  /** Text content  of the post. */
  content: Scalars['String'];
  /** id of the parent */
  parentId: Scalars['String'];
  /** id of the parent */
  parentType: ParentType;
};

export type CreateFriendRequestInput = {
  /**  A user who receives a friend request.  */
  toUserId: Scalars['String'];
};

export type CreatePostInput = {
  /** Text content  of the user. */
  content: Scalars['String'];
  /** Array of images and media in post of the user. */
  media: Array<Scalars['Upload']>;
};

export type CreateUserInput = {
  /** Email id of the user. */
  email: Scalars['String'];
  /** A unique username assigned to the user. */
  username: Scalars['String'];
};

export type Friend = {
  __typename?: 'Friend';
  /**  Friend of user */
  friend: ShortUser;
  /** Id of the Friend */
  id: Scalars['ID'];
  /** User who has friends */
  user: Scalars['String'];
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  /** Creation date of friend request */
  createdAt: Scalars['DateTime'];
  /** A user who sent a friend request */
  fromUser: User;
  /** Id of the Friend Request */
  id: Scalars['ID'];
  /** A user who received a friend request */
  toUser: Scalars['String'];
  /** Updation date of friend request */
  updatedAt: Scalars['DateTime'];
};

export type FriendRequestNotification = {
  __typename?: 'FriendRequestNotification';
  /**  id  of the friend Request. */
  friendRequest: Scalars['String'];
  /**  name of the user who sent the friend Request. */
  fromName: Scalars['String'];
  /**  profileimage  of the user who sent the friend Request. */
  fromProfileImage?: Maybe<FromProfileImage>;
  /**  id  of the user who sent the friend Request. */
  fromUser: Scalars['String'];
  /**  username  of the user who sent the friend Request. */
  fromUsername: Scalars['String'];
  /** boolean value for user has seen or has not seen the friend request. */
  hasSeen: Scalars['Boolean'];
  id: Scalars['ID'];
};

export type FromProfileImage = {
  __typename?: 'FromProfileImage';
  hash: Scalars['String'];
  url: Scalars['String'];
};

export type Image = {
  __typename?: 'Image';
  hash: Scalars['String'];
  url: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptFriendRequest: FriendRequest;
  createComment: Comment;
  createFriendRequest: FriendRequest;
  createPost: Post;
  createUser: User;
  likeComment: Comment;
  likePost: Scalars['String'];
  rejectFriendRequest: FriendRequest;
  removeComment: Comment;
  removeFriend: Array<Friend>;
  removeFriendRequst: FriendRequest;
  removePost: Post;
  removeUser: User;
  sharePost: Post;
  unLikeComment: Comment;
  unLikePost: Scalars['String'];
  updateUser: User;
};


export type MutationAcceptFriendRequestArgs = {
  id: Scalars['String'];
};


export type MutationCreateCommentArgs = {
  createCommentInput: CreateCommentInput;
};


export type MutationCreateFriendRequestArgs = {
  createFriendRequestInput: CreateFriendRequestInput;
};


export type MutationCreatePostArgs = {
  createPostInput: CreatePostInput;
};


export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};


export type MutationLikeCommentArgs = {
  id: Scalars['String'];
};


export type MutationLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationRejectFriendRequestArgs = {
  id: Scalars['String'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['String'];
};


export type MutationRemoveFriendArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveFriendRequstArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};


export type MutationSharePostArgs = {
  postId: Scalars['String'];
};


export type MutationUnLikeCommentArgs = {
  id: Scalars['String'];
};


export type MutationUnLikePostArgs = {
  postId: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  friendRequests: Array<FriendRequestNotification>;
};

export type NotificationSub = {
  __typename?: 'NotificationSub';
  friendRequest?: Maybe<FriendRequestNotification>;
};

/** Post or Comment */
export enum ParentType {
  Comment = 'COMMENT',
  Post = 'POST'
}

export type Post = {
  __typename?: 'Post';
  /** Activity of the post. */
  activity: PostActivity;
  /** Author of the post who originally created the post. */
  author: ShortUser;
  /** Text content  of the user. */
  content?: Maybe<Scalars['String']>;
  /** Creation date of post */
  createdAt: Scalars['DateTime'];
  /** Id of  the post. */
  id: Scalars['ID'];
  /** Whether the post is liked by the user. */
  isLiked: Scalars['Boolean'];
  /** Array of images and media in post of the user. */
  media: Array<Scalars['String']>;
  /** Updation date of post */
  updatedAt: Scalars['DateTime'];
  /**  User of the post who owns the post. */
  user: ShortUser;
};

export type PostActivity = {
  __typename?: 'PostActivity';
  commentsCount: Scalars['Float'];
  likesCount: Scalars['Float'];
};

export type ProfileImage = {
  __typename?: 'ProfileImage';
  hash: Scalars['String'];
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  checkUserName: Scalars['Boolean'];
  findAllComments: Array<Comment>;
  friendExists: Scalars['Boolean'];
  friendRequest?: Maybe<FriendRequest>;
  friendRequestById: FriendRequest;
  friendRequestSent?: Maybe<FriendRequest>;
  friendRequests: Array<FriendRequest>;
  friends: Array<Friend>;
  friendsByUsername: Array<Friend>;
  getHello: Scalars['String'];
  notifications: Notification;
  post: Post;
  posts: Array<Post>;
  postsByUser: Array<Post>;
  postsByUsername: Array<Post>;
  user: User;
  userById: User;
  users: Array<User>;
};


export type QueryCheckUserNameArgs = {
  username: Scalars['String'];
};


export type QueryFindAllCommentsArgs = {
  parentId: Scalars['String'];
};


export type QueryFriendExistsArgs = {
  id: Scalars['ID'];
};


export type QueryFriendRequestArgs = {
  userId: Scalars['String'];
};


export type QueryFriendRequestByIdArgs = {
  id: Scalars['String'];
};


export type QueryFriendRequestSentArgs = {
  userId: Scalars['String'];
};


export type QueryFriendsByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryPostsByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryUserArgs = {
  username: Scalars['String'];
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};

export type ShortUser = {
  __typename?: 'ShortUser';
  /** Name of the user. */
  name: Scalars['String'];
  /** Profile image of the user. */
  profileImage?: Maybe<Image>;
  /** Username of the user. */
  username: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  watchNotifications: NotificationSub;
};

export type UpdateUserInput = {
  /** Bio of the user. */
  bio?: InputMaybe<Scalars['String']>;
  /** Country name of the user. */
  country?: InputMaybe<Scalars['String']>;
  /** Cover image of the user. */
  coverImage?: InputMaybe<Scalars['Upload']>;
  /** Age of the user. */
  dob?: InputMaybe<Scalars['DateTime']>;
  /** First name of the user. */
  firstName?: InputMaybe<Scalars['String']>;
  /** Gender of the user. */
  gender?: InputMaybe<Scalars['String']>;
  /** Last name of the user. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Profile image of the user. */
  profileImage?: InputMaybe<Scalars['Upload']>;
};

export type User = {
  __typename?: 'User';
  /** Bio of the user. */
  bio?: Maybe<Scalars['String']>;
  /** Country name of the user. */
  country?: Maybe<Scalars['String']>;
  /** Cover image of the user. */
  coverImage?: Maybe<CoverImage>;
  /** DOB of the user. */
  dob?: Maybe<Scalars['DateTime']>;
  /** Email id of the user. */
  email: Scalars['String'];
  /** First name of the user. */
  firstName?: Maybe<Scalars['String']>;
  /** Gender of the user. */
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Last name of the user. */
  lastName?: Maybe<Scalars['String']>;
  /** Full name of the user. */
  name?: Maybe<Scalars['String']>;
  /** Phone number of the user. */
  phone?: Maybe<Scalars['String']>;
  /** Profile image of the user. */
  profileImage?: Maybe<ProfileImage>;
  /** A unique username assigned to the user. */
  username: Scalars['String'];
};

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content?: string | null, media: Array<string>, createdAt: any, updatedAt: any, activity: { __typename?: 'PostActivity', commentsCount: number, likesCount: number }, author: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Image', hash: string, url: string } | null }, user: { __typename?: 'ShortUser', name: string, username: string, profileImage?: { __typename?: 'Image', hash: string, url: string } | null } }> };

export type RemovePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost: { __typename?: 'Post', id: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, bio?: string | null, country?: string | null, phone?: string | null, username: string, profileImage?: { __typename?: 'ProfileImage', hash: string, url: string } | null, coverImage?: { __typename?: 'CoverImage', hash: string, url: string } | null }> };


export const PostsDocument = gql`
    query posts {
  posts {
    id
    activity {
      commentsCount
      likesCount
    }
    author {
      name
      profileImage {
        hash
        url
      }
      username
    }
    content
    media
    user {
      name
      profileImage {
        hash
        url
      }
      username
    }
    createdAt
    updatedAt
  }
}
    `;

export function usePostsQuery(options: Omit<Urql.UseQueryArgs<never, PostsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PostsQuery>({ query: PostsDocument, ...options });
};
export const RemovePostDocument = gql`
    mutation removePost($id: String!) {
  removePost(id: $id) {
    id
  }
}
    `;

export function useRemovePostMutation() {
  return Urql.useMutation<RemovePostMutation, RemovePostMutationVariables>(RemovePostDocument);
};
export const UsersDocument = gql`
    query users {
  users {
    id
    firstName
    lastName
    bio
    country
    phone
    username
    profileImage {
      hash
      url
    }
    coverImage {
      hash
      url
    }
    country
  }
}
    `;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<never, UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<UsersQuery>({ query: UsersDocument, ...options });
};