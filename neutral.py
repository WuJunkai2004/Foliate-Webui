import mimetypes
import vercel

class layer(vercel.API):
    def auto_headers(self, url):
        self.header_mime(url)

    def header_mime(self, url):
        mime_type, _ = mimetypes.guess_type(url)
        if mime_type:
            self.send_header('Content-Type', mime_type)
        else:
            self.send_header('Content-Type', 'application/octet-stream')