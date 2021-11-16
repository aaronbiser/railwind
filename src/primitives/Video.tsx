import React, { ReactElement } from 'react'
import { getAllClassNames } from '../lib/helpers'
import { VideoProps} from '../types'

export const Video = ({ rwStyle, media, fallback, ...props }: VideoProps): ReactElement => {
  return (
    <video 
      {...props}
      autoPlay
      className={getAllClassNames(rwStyle)}
    >
      {media.map(m => {
        return (
          <source key={m.url} src={m.url} type={m.mimeType} />
        )
      })}
      {fallback || 'Your browser does not support the video tag.'}
    </video> 
  )
}