export type Repo = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  repolink: string;
  owner: {
    id: number;
    avatarUrl: string;
    login: string;
    url: string;
  };
  topics: Array<{ id: string; name: string }>;
  createdById: string;
  uploadedAt: Date;
  ownerId: number;
};
