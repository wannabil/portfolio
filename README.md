## How to Run Locally

You can easily run this portfolio website on your local machine using one of the following methods:

### Method 1: Open `index.html` Directly

The simplest way to view your portfolio is to just open the HTML file in your web browser.

1.  **Locate `index.html`:** Find the `index.html` file in your project directory.
2.  **Double-click:** Double-click the file, and it should open automatically in your default web browser. Alternatively, right-click and choose "Open with..." to select a specific browser.

### Method 2: Use a Local Web Server (Recommended)

Using a local web server provides a more accurate representation of how the website would function online and avoids potential browser security restrictions.

#### Using `http-server` (Requires Node.js and npm)

1.  **Open your terminal or command prompt.**
2.  **Navigate to your project directory:**
    ```bash
    cd /path/to/your/portfolio-folder
    ```
3.  **Install `http-server` globally (if you haven't already):**
    ```bash
    npm install -g http-server
    ```
4.  **Start the server:**
    ```bash
    http-server
    ```
5.  **Access in browser:** Open your web browser and go to the address provided in your terminal (e.g., `http://127.0.0.1:8080` or `http://localhost:8080`).

#### Using Python's Built-in HTTP Server (Requires Python)

1.  **Open your terminal or command prompt.**
2.  **Navigate to your project directory:**
    ```bash
    cd /path/to/your/portfolio-folder
    ```
3.  **Start the server:**
    * **For Python 3:**
        ```bash
        python -m http.server
        ```
    * **For Python 2 (older):**
        ```bash
        python -m SimpleHTTPServer
        ```
4.  **Access in browser:** Open your web browser and go to `http://localhost:8000`.
