import webapp2
class MainPage(webapp2.RequestHandler):
	def get(self):
		self.response.write("Hello class, Welcome to Cloud Computing Lab!")

app=webapp2.WSGIApplication([('/', MainPage)], debug=True)