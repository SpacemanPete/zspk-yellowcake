import { NetlifyCmsApp as CMS } from 'netlify-cms-app/dist/esm'
import uploadcare from 'netlify-cms-media-library-uploadcare'

CMS.registerMediaLibrary(uploadcare);