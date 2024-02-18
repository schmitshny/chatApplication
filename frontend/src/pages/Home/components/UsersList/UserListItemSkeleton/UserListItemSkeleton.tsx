import { SkeletonAvatar, SkeletonText, SkeletonTextSmall, SkeletonWrapper } from './UserListItemSkeleton.styles';

export const UserListItemSkeleton = () => (
  <SkeletonWrapper>
    <SkeletonAvatar />
    <div>
      <SkeletonText />
      <SkeletonTextSmall />
    </div>
  </SkeletonWrapper>
);
