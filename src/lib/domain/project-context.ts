export type ProjectContextInput = {
  label: string;
  rootPath: string;
};

export type NormalizedProjectContext = {
  label: string;
  rootPath: string;
  isAttached: true;
};

export function normalizeProjectContext(
  input: ProjectContextInput,
): NormalizedProjectContext {
  return {
    label: input.label.trim(),
    rootPath: input.rootPath.trim(),
    isAttached: true,
  };
}
