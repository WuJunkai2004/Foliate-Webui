import server.vercel as vercel
import server.verapi as verapi

def run():
    print("Starting server at http://localhost:18000")
    vercel.start(
        HandlerClass=verapi.handler,
        port=18000
    )