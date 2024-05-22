# #**GÍA TRỊ ĐẦU TIÊN CỦA TEST LÀ THẰNG INDEX CUỐI CỦA TRAIN : 1890, TỨC LÀ TIME CỦA INDEX 1889  + 1HOUR**
# from datetime import datetime, timedelta
# firstTime=train.iloc[1889].name
# firstTime_plus_one_hour = firstTime + timedelta(hours=1)
# print(firstTime_plus_one_hour)


# #**USE THIS FUNCTION TO CREATE <TIME,TEMP>**

# true_predictions_flat = true_predictions[:, 0]
# time_range = pd.date_range(start=firstTime_plus_one_hour, periods=len(true_predictions_flat), freq='H')
# data = pd.DataFrame({'time': time_range, 'temp': true_predictions_flat})
# print(data)

for i in range(600):
    print (i)