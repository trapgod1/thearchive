# FFmpeg

FFmpeg is a free and open-source project consisting of a vast software suite of libraries and programs for handling video, audio, and other multimedia files and streams. At its core is the FFmpeg command-line program, which can be used for transcoding multimedia files, streaming, and other multimedia tasks.

## Installation
Download the latest release from [FFmpeg](https://ffmpeg.org/download.html) and extract it to a folder. Add the folder to your PATH.


## Usage
Documentation can be found [here](https://ffmpeg.org/documentation.html)

## FFmpeg Cheat Sheet

| Task                           | Command                                                                                 |
|--------------------------------|-----------------------------------------------------------------------------------------|
| **Get file info** | `ffmpeg -i input.mp4`                                                                   |
| **Detailed metadata** | `ffprobe -i input.mp4`                                                                  |
| **Convert video format** | `ffmpeg -i input.mov output.mp4`                                                        |
| **Convert audio format** | `ffmpeg -i input.wav output.mp3`                                                        |
| **Convert to H.264** | `ffmpeg -i input.mp4 -c:v libx264 -preset fast -crf 23 -c:a aac output.mp4`             |
| **Convert to H.265 (HEVC)** | `ffmpeg -i input.mp4 -c:v libx265 -preset fast -crf 28 -c:a aac output.mp4`             |
| **Convert audio to AAC** | `ffmpeg -i input.mp3 -c:a aac output.m4a`                                               |
| **Resize to 1080p** | `ffmpeg -i input.mp4 -vf "scale=1920:1080" output.mp4`                                  |
| **Resize while keeping aspect ratio** | `ffmpeg -i input.mp4 -vf "scale=1280:-1" output.mp4`                                    |
| **Extract audio from video** | `ffmpeg -i input.mp4 -vn -acodec copy output.aac`                                       |
| **Replace audio in video** | `ffmpeg -i input.mp4 -i new-audio.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4` |
| **Trim video (from 30s to 60s)** | `ffmpeg -i input.mp4 -ss 00:00:30 -to 00:01:00 -c copy output.mp4`                      |
| **Trim without re-encoding** | `ffmpeg -i input.mp4 -ss 30 -t 10 -c copy output.mp4`                                   |
| **Merge videos (same format)** | `ffmpeg -f concat -safe 0 -i filelist.txt -c copy output.mp4`                           |
| **Change FPS to 30** | `ffmpeg -i input.mp4 -r 30 output.mp4`                                                  |
| **Speed up video 2x** | `ffmpeg -i input.mp4 -filter:v "setpts=0.5*PTS" output.mp4`                             |
| **Slow down video 2x** | `ffmpeg -i input.mp4 -filter:v "setpts=2.0*PTS" output.mp4`                             |
| **Extract frames as images** | `ffmpeg -i input.mp4 -vf "fps=1" frame_%04d.png`                                        |
| **Convert video to GIF** | `ffmpeg -i input.mp4 -vf "fps=10,scale=500:-1:flags=lanczos" output.gif`                |
| **Burn subtitles into video** | `ffmpeg -i input.mp4 -vf "subtitles=subs.srt" output.mp4`                               |



