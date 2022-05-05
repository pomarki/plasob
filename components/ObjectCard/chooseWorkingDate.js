function chooseWorkingDate(choosenDay) {
  let durationWork = workDays.finish - workDays.start + 1;
  let workObj = { start: 0, finish: 0 };

  function workDayToggle() {
    if (choosenDay < workDays.start) {
      workObj = { start: choosenDay, finish: workDays.finish };

      setWorkDays(workObj);
    } else {
      workObj = { start: workDays.start, finish: choosenDay };
      setWorkDays(workObj);
    }
  }

  if (workDays.start === 0) {
    workObj = { start: choosenDay, finish: choosenDay };
    setWorkDays(workObj);
    return;
  }

  if (durationWork === 1) {
    if (choosenDay === workDays.start) {
      workObj = { start: 0, finish: 0 };
      setWorkDays(workObj);
      return;
    } else {
      workDayToggle();
      return;
    }
  }

  if (durationWork > 1) {
    workDayToggle();
    return;
  }
}
