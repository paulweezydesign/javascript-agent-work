import { NextResponse } from 'next/server';
import { z } from 'zod';
import { createWorkspace } from '@/lib/domain/workspaces';

const workspaceSchema = z.object({
  name: z.string().min(1).max(120),
  projectContext: z
    .object({
      label: z.string().min(1),
      rootPath: z.string().min(1),
    })
    .nullable()
    .optional(),
});

export async function POST(request: Request) {
  const payload = workspaceSchema.parse(await request.json());
  const workspace = await createWorkspace(payload.name, payload.projectContext ?? null);
  return NextResponse.json(workspace, { status: 201 });
}
