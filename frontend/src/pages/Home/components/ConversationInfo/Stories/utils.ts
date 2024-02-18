export interface ImagePickerConf {
  width?: string;
  height?: string;
  borderRadius?: string;
  aspectRatio?: number | null;
  objectFit?: 'cover' | 'contain' | 'fill' | 'revert' | 'scale-down';
  compressInitial?: number;
  language?: string;
  hideDeleteBtn?: boolean;
  hideDownloadBtn?: boolean;
  hideEditBtn?: boolean;
  hideAddBtn?: boolean;
}

export const pickerConfig: ImagePickerConf = {
  borderRadius: '8px',
  language: 'en',
  width: '430px',
  height: '350px',
  objectFit: 'contain',
};
