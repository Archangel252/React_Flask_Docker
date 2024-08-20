from flask import Flask, jsonify, current_app as app


@app.route('/connect')
def connect():
    # Example data to return
    data = {
        'message': 'Hello from Flask!'
    }
    return jsonify(data)  # Return the data as a JSON response