import { axiosInstance } from '../../../services/api/axios';
import { useBaseMutation } from '../useBaseMutation';

import type { FileRequest, FileResponse } from './file.type';

// Mutations
export function useUploadFile() {
  return useBaseMutation<FileResponse, Error, FileRequest>({
    mutationFn: data => axiosInstance.post('/file/generate-url', data),
  });
}
