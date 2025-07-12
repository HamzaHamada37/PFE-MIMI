# Flask Dashboard App

A modern web application built with Flask for visualizing Power BI dashboards with a clean, professional interface.

## Features

- **Home Page**: Welcome page with feature highlights and call-to-action
- **Power BI Dashboard**: Dedicated page for embedding and displaying Power BI reports
- **About Page**: Information about the application and technologies used
- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Clean design with Gold Commitment and Champagne color scheme
- **Interactive Elements**: Modal dialogs, notifications, and smooth animations

## Color Scheme

- **Primary Color**: Gold Commitment (#D4AF37)
- **Secondary Color**: Champagne (#F7E7CE)
- **Supporting Colors**: Various shades and gradients for depth and visual appeal

## Project Structure

```
PFE MIMI/
├── app.py                 # Main Flask application
├── requirements.txt       # Python dependencies
├── README.md             # This file
├── templates/            # HTML templates
│   ├── base.html         # Base template with navigation and footer
│   ├── home.html         # Home page template
│   ├── dashboard.html    # Power BI dashboard page
│   └── about.html        # About page template
└── static/              # Static files
    ├── css/
    │   └── style.css     # Main stylesheet
    └── js/
        └── main.js       # JavaScript functionality
```

## Installation and Setup

### Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

### Step 1: Clone or Download

Download the project files to your local machine.

### Step 2: Create Virtual Environment (Recommended)

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate
```

### Step 3: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 4: Run the Application

```bash
python app.py
```

The application will start and be available at:
- **Local**: http://localhost:5000
- **Network**: http://0.0.0.0:5000

## Usage

### Home Page
- Visit the root URL to see the welcome page
- Navigate using the top navigation bar
- Click "View Dashboard" to go to the Power BI page

### Power BI Dashboard
- The dashboard page includes a placeholder for Power BI embedding
- Click "Configure Dashboard" to set up your Power BI connection
- Enter your Power BI embed URL, Report ID, and Workspace ID
- The page also displays sample statistics cards

### About Page
- Learn more about the application and its features
- View the technology stack used

## Power BI Integration

To integrate your actual Power BI dashboard:

1. **Get Power BI Embed URL**:
   - Go to your Power BI workspace
   - Open your report
   - Click "File" > "Embed report" > "Website or portal"
   - Copy the embed URL

2. **Configure in the App**:
   - Go to the Dashboard page
   - Click "Configure Dashboard"
   - Enter your embed URL, Report ID, and Workspace ID
   - Click "Apply Configuration"

3. **Advanced Integration** (Optional):
   - For production use, implement proper Power BI authentication
   - Add server-side configuration management
   - Implement user access controls

## Customization

### Colors
- Modify CSS variables in `static/css/style.css` under `:root` selector
- Update primary and secondary colors as needed

### Content
- Edit HTML templates in the `templates/` directory
- Modify text, images, and layout as required

### Functionality
- Add new routes in `app.py`
- Extend JavaScript functionality in `static/js/main.js`

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Development

### Adding New Pages

1. Create a new HTML template in `templates/`
2. Add a new route in `app.py`
3. Update navigation in `base.html`

### Styling Guidelines

- Use CSS variables for consistent theming
- Follow mobile-first responsive design
- Maintain accessibility standards
- Use semantic HTML elements

## Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `app.py` or stop other applications using port 5000
2. **Module not found**: Ensure virtual environment is activated and dependencies are installed
3. **Static files not loading**: Check file paths and ensure Flask is serving static files correctly

### Debug Mode

The application runs in debug mode by default for development. For production:
- Set `debug=False` in `app.py`
- Use a production WSGI server like Gunicorn

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please refer to the documentation or create an issue in the project repository.
