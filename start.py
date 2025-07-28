try:
    from imp import load_source
except ImportError:
    from importlib.util import spec_from_file_location, module_from_spec
    load_source = lambda name, path: module_from_spec(spec_from_file_location(name, path))

import os
import vercel
import neutral

def main(handler = vercel.API, port = 18000):
    print(f"server start at http://localhost:{port}")
    vercel.start(
        HandlerClass = handler,
        port = port
    )


class handler(neutral.layer):
    def vercel(self, url, data, headers):
        if(os.path.isdir(url)):
            self.send_code(200)
            self.auto_headers(url)
            for home in ['index.html','index.htm']:
                if(os.path.isfile(url + home)):
                    self.send_file(url + home)
                    return
            self.send_text( '\n'.join(os.listdir(url)) )
            return
    
        if(os.path.isfile(url)):
            if(os.path.splitext(url)[1]=='.py'):
                return vercel.ErrorStatu(self, 403)
            self.send_code(200)
            self.auto_headers(url)
            self.send_file(url)
            return

        if(os.path.isfile(url + '.py')):
            mod = load_source(url,url + '.py')
            try:
                mod.handler.vercel(self, url, data, headers)
            except AttributeError:
                vercel.ErrorStatu(self, 503)
            return
        
        vercel.ErrorStatu(self, 404)


if(__name__=='__main__'):
    main( handler )
