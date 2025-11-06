import type { paths } from '../../../types/api/generated';

export type FileRequest =
  paths['/v1/file/generate-url']['post']['requestBody']['content']['application/json'];
export type FileResponse =
  paths['/v1/file/generate-url']['post']['responses']['200']['content']['application/json']['data'];
