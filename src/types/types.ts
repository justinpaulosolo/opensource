export type Repo = {
  id: string;
  name: string;
  fullName: string;
  description: string;
  repolink: string;
  topics: Array<{ id: string; name: string }>;
  createdById: string;
  uploadedAt: Date;
};
