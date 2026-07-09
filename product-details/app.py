from flask import Flask, jsonify
import os

app = Flask(__name__)

products = {
    "1": {"id": 1, "name": "Laptop", "description": "High performance laptop"},
    "2": {"id": 2, "name": "Smartphone", "description": "Latest model smartphone"},
    "3": {"id": 3, "name": "Tablet", "description": "10-inch display tablet"}
}

@app.route('/product/<int:product_id>', methods=['GET'])
def get_product(product_id):
    product = products.get(str(product_id))
    if product:
        return jsonify(product), 200
    return jsonify({"error": "Product not found"}), 404

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8080))
    app.run(host='0.0.0.0', port=port)