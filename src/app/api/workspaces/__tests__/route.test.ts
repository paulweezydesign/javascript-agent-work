import { describe, expect, it, beforeEach } from 'vitest';
import { normalizeProjectContext } from '@/lib/domain/project-context';
import { POST } from '@/app/api/workspaces/route';
import { resetDbForTests } from '@/lib/db';

describe('normalizeProjectContext', () => {
  it('normalizes project metadata for an attached workspace', () => {
    const result = normalizeProjectContext({
      label: 'marketing-site',
      rootPath: '/Users/paul/code/marketing-site',
    });

    expect(result.label).toBe('marketing-site');
    expect(result.rootPath).toBe('/Users/paul/code/marketing-site');
    expect(result.isAttached).toBe(true);
  });
});

describe('POST /api/workspaces', () => {
  beforeEach(() => {
    resetDbForTests();
  });

  it('creates a workspace without an attached project', async () => {
    const request = new Request('http://localhost:3000/api/workspaces', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Snippet Lab',
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(201);

    const payload = await response.json();
    expect(payload.name).toBe('Snippet Lab');
    expect(payload.projectLabel).toBeNull();
    expect(payload.projectRootPath).toBeNull();
    expect(payload.id).toBeDefined();
    expect(new Date(payload.createdAt).toString()).not.toBe('Invalid Date');
  });

  it('creates a workspace with attached project metadata', async () => {
    const request = new Request('http://localhost:3000/api/workspaces', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Workspace with Context',
        projectContext: {
          label: ' marketing-site ',
          rootPath: ' /Users/paul/code/marketing-site ',
        },
      }),
    });

    const response = await POST(request);
    expect(response.status).toBe(201);

    const payload = await response.json();
    expect(payload.name).toBe('Workspace with Context');
    expect(payload.projectLabel).toBe('marketing-site');
    expect(payload.projectRootPath).toBe('/Users/paul/code/marketing-site');
  });
});
