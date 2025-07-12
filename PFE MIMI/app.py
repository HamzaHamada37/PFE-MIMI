from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    """Home page route"""
    return render_template('home.html')

@app.route('/dashboard')
def dashboard():
    """Power BI Dashboard page route"""
    return render_template('dashboard.html')

@app.route('/about')
def about():
    """About page route (optional)"""
    return render_template('about.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
