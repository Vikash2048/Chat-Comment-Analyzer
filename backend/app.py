from flask import Flask, request, jsonify
from flask_cors import CORS
from whatsappAnalyserFiles.helper import (
    fetch_stats, monthly_timeline, daily_timeline, week_activity_map,
    month_activity_map, activity_heatmap, most_busy_users, most_common_words, emoji_helper
)
from whatsappAnalyserFiles.preprocessor import preprocess
import pandas as pd

app = Flask(__name__)
CORS(app,origins="*",supports_credentials=True)


@app.route("/user",methods=['POST'])
def user():
        file = request.files['file']
    
        user = request.form.get("user","Overall")

        data = file.read().decode("utf-8")
        df = preprocess(data)

        # If the DataFrame is empty after preprocessing, return an error

        analysis_results = {}
            
        # Fetch stats
        analysis_results['stats'] = fetch_stats(user, df)

        # Monthly timeline
        analysis_results['monthly_timeline'] = monthly_timeline(user, df).to_dict(orient='records')

        # Daily timeline
        analysis_results['daily_timeline'] = daily_timeline(user, df).to_dict(orient='records')

        # Activity map
        analysis_results['activity_heatmap'] = activity_heatmap(user, df).to_dict(orient='records')

        # Most busy users
        analysis_results['most_busy_users'] = {
            "top_users": None,
            "percentages": None
        }

        # Week activity map
        week_activity = week_activity_map(user, df)
        analysis_results['week_activity'] = week_activity.to_dict()

        # Month activity map
        month_activity = month_activity_map(user, df)
        analysis_results['month_activity'] = month_activity.to_dict()


        Stats = analysis_results["stats"]
        MonthlyTimeline = analysis_results["monthly_timeline"]
        DailyTimeline = analysis_results["daily_timeline"]
        MostBusyDay = analysis_results["week_activity"]
        MostBusyMonth = analysis_results["month_activity"]
        MostBusyUser = analysis_results["most_busy_users"]

        
        return jsonify(Stats,MonthlyTimeline,DailyTimeline,MostBusyDay,MostBusyMonth,MostBusyDay,MostBusyUser)

@app.route('/analyze', methods=['POST'])
def analyze_chat():
    file = request.files['file']
    
    if file:
        # Preprocess the file and generate the DataFrame
        data = file.read().decode("utf-8")
        df = preprocess(data)

        user = request.form.get("user","Overall")

        # If the DataFrame is empty after preprocessing, return an error
        if df.empty:
            return jsonify({'error': 'Processed data is empty'}), 400

        if user!= "Overall":
            df = df[df["user"] == user]
        # Perform all analyses
        analysis_results = {}

        #listing user list
        user_list = df['user'].unique().tolist()
        if 'group_notification' in user_list:
            user_list.remove('group_notification')
            user_list.sort()
            user_list.insert(0, "Overall")
        analysis_results["user_list"] = user_list
            
        # Fetch stats
        analysis_results['stats'] = fetch_stats(user, df)

        # Monthly timeline
        analysis_results['monthly_timeline'] = monthly_timeline('Overall', df).to_dict(orient='records')

        # Daily timeline
        analysis_results['daily_timeline'] = daily_timeline(user, df).to_dict(orient='records')

        # Activity map
        analysis_results['activity_heatmap'] = activity_heatmap('Overall', df).to_dict(orient='records')

        # Most busy users
        # analysis_results['most_busy_users'] = most_busy_users(df)
        top_users_df, percentages_df = most_busy_users(df)
        analysis_results['most_busy_users'] = {
            "top_users": top_users_df.to_dict(orient='records'),
            "percentages": percentages_df.to_dict(orient='records')
        }

        # Most common words
        analysis_results['most_common_words'] = most_common_words('Overall', df).to_dict(orient='records')

        # Week activity map
        week_activity = week_activity_map(user, df)
        analysis_results['week_activity'] = week_activity.to_dict()

        # Month activity map
        month_activity = month_activity_map(user, df)
        analysis_results['month_activity'] = month_activity.to_dict()


        UserList = analysis_results["user_list"]
        Stats = analysis_results["stats"]
        MonthlyTimeline = analysis_results["monthly_timeline"]
        DailyTimeline = analysis_results["daily_timeline"]
        MostBusyDay = analysis_results["week_activity"]
        MostBusyMonth = analysis_results["month_activity"]
        MostBusyUser = analysis_results["most_busy_users"]

        return jsonify(Stats,UserList,MonthlyTimeline,DailyTimeline,MostBusyDay,MostBusyMonth,MostBusyUser)
    else:
        return jsonify({'error': 'No file provided'}), 400

if __name__ == "__main__":
    app.run(debug=True)  


