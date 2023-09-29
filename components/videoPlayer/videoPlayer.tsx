"use client"

interface VideoPlayerProperties {
  movie_path: string
}

const VideoPlayer:React.FC<VideoPlayerProperties> = ({ movie_path }) => {
  return (
    <div>
      <video width="640" height="360" controls>
        <source src={movie_path} type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer