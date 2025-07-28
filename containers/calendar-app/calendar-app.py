import calendar

print("Welcome to the Calendar App!")
print("Please enter the year you want to view:")
year = int(input())
print("Please enter the month you want to view (1-12):")
month = int(input())

TextCalendar = calendar.TextCalendar()
print(TextCalendar.formatmonth(year, month))