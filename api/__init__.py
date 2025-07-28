import api.vercel as vercel
import api.verapi as verapi

def run():
    vercel.start(
        HandlerClass=verapi.handler,
        port=18000
    )