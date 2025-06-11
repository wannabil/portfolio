
## How to Run Locally

After cloning the repository from `https://github.com/wannabil/portfolio`, you'll have the `index.html`, `style.css`, and `script.js` files. You can view the portfolio using one of these simple methods:

### Method 1: Open `index.html` Directly

This is the quickest way to see the website.

1.  **Locate `index.html`:** Find the `index.html` file in the root of the cloned repository.
2.  **Open in Browser:** Double-click the `index.html` file, or right-click it and choose "Open with..." to select your preferred web browser (like **Chrome**, **Firefox**, **Edge**, or **Safari**).

    Your browser will display the portfolio, loading the styles and interactive elements automatically.

### Method 2: Use a Local Web Server (Recommended)

Using a local web server is a better practice for web development as it mimics how websites are served online and can prevent certain browser security restrictions that might occur when opening files directly.

#### Option A: Using `http-server` (Requires Node.js and npm)

If you have Node.js and npm installed on your machine:

1.  **Open Terminal/Command Prompt:** Navigate to the cloned repository's directory in your terminal or command prompt.
    ```bash
    cd portfolio
    ```
2.  **Install `http-server`:** If you haven't installed it before, install `http-server` globally:
    ```bash
    npm install -g http-server
    ```
3.  **Start the Server:** Run the following command:
    ```bash
    http-server
    ```
4.  **Access in Browser:** The terminal will provide a URL (e.g., `http://127.0.0.1:8080` or `http://localhost:8080`). Copy this URL and paste it into your web browser.

#### Option B: Using Python's Built-in HTTP Server (Requires Python)

If you have Python installed on your system:

1.  **Open Terminal/Command Prompt:** Navigate to the cloned repository's directory:
    ```bash
    cd portfolio
    ```
2.  **Start the Server:** Execute the appropriate command for your Python version:
    * **For Python 3:**
        ```bash
        python -m http.server
        ```
    * **For Python 2 (older):**
        ```bash
        python -m SimpleHTTPServer
        ```
3.  **Access in Browser:** Open your web browser and go to `http://localhost:8000`.
