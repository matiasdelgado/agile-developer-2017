const express = require('express');
const router = express.Router();
const { issueStore } = require('../models');

router.get('/', function(req, res) {
  const openIssues = issueStore.getAllOpen()
  const openIssuesCount = openIssues.length;

  const highSeverityCount =
    openIssues.filter(issue => issue.severity === 'High').length;

  res.render('dashboard', {
    openIssuesCount: openIssuesCount,
    highSeverityPercentage: highSeverityCount / openIssuesCount
  });
});

module.exports = router;
