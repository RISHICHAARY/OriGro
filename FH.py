import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

dataSet = pd.read_csv('demandPricingDataSet.csv')

model = LinearRegression()
model.fit(dataSet.iloc[1:,0:1],dataSet.iloc[1:,1:2])

@app.route("/")
def home():
    return "Home"

@app.route("/predictPrice", methods=['POST'])
def postTest():
    data = request.get_json()
    x_test = np.array([data['demand']])
    y_pred = model.predict(x_test.reshape(-1,1))
    estimate = data['price'] + ((data['price']*y_pred[0][0])/1)
    response = jsonify({ 'demand':data['demand'],
                 'originalPrice':data['price'],
                 'predictedBoostPercentage':y_pred[0][0],
                 'predictedBestPrice':estimate
                })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

if __name__ == "__main__":
    app.run(debug=True)
