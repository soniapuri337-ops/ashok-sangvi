HERO BACKGROUND VIDEO
=====================

The homepage hero is built to work with or without a video.

Right now there is no video file in this folder, so the hero shows the still
image with the teal gradient over it. That is a finished, correct state. You can
deploy exactly as is.

TO TURN THE VIDEO ON
--------------------
Drop a file named  hero-home.mp4  into this /public folder. That is the only
step. No code change is needed. The hero will pick it up automatically.

The video only loads when ALL of these are true:
  - the viewport is 1024px wide or more
  - the visitor does not have reduced motion turned on
  - the browser does not report data saver or a connection slower than 4g
  - the page has finished loading (it waits 800ms after window load)

The still image always stays underneath as the LCP element, so Core Web Vitals
are unaffected and the hero never shows an empty box.

ENCODING
--------
The hero is full bleed and landscape, so use 16:9 source footage.

  ffmpeg -i source.mp4 -t 12 -an \
    -vf "scale=1920:-2,fps=25" \
    -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart \
    public/hero-home.mp4

  -pix_fmt yuv420p    required, Safari will not play the file without it
  -movflags +faststart required, otherwise Chrome downloads the whole file first
  -an                  strips the audio track, it is muted anyway

Target under 1.2 MB. If it is larger, raise -crf from 30 towards 34. The video
sits at 45 percent opacity behind a gradient, so quality loss will not show.

OPTIONAL WEBM
-------------
For smaller files you can also add hero-home.webm, then open src/data/site.ts
and set the webm value in the heroVideo object to "/hero-home.webm".

  ffmpeg -i source.mp4 -t 12 -an -vf "scale=1920:-2,fps=25" \
    -c:v libvpx-vp9 -crf 40 -b:v 0 public/hero-home.webm

SEAMLESS LOOP
-------------
If the loop jumps, this appends a reversed copy so the cut is invisible:

  ffmpeg -i clip.mp4 -filter_complex \
    "[0]split[a][b];[b]reverse[r];[a][r]concat=n=2:v=1" \
    -an -c:v libx264 -crf 30 -pix_fmt yuv420p -movflags +faststart loop.mp4

Then use loop.mp4 as the source in the encoding command above.
