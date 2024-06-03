import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import EmailIcon from '@mui/icons-material/Email';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function TestComponent() {
  return (
    <Timeline 
      sx={{
        '& .MuiTimelineItem-root:before': {
          flex: 0,
          padding: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <CheckCircleIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
            <Typography variant="h6" component="span">
              Loan Sanctioned
            </Typography>
            <Typography>09-12-2023</Typography>
            <Box sx={{ backgroundColor: '#E0F7FA', padding: '5px', borderRadius: '5px' }}>
              <Typography variant="body2">INR 50,000</Typography>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <ErrorIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
            <Typography variant="h6" component="span">
              Margin Call
            </Typography>
            <Typography>10-02-2024</Typography>
            <Box sx={{ backgroundColor: '#FFEBEE', padding: '5px', borderRadius: '5px' }}>
              <Typography variant="body2">Moved to 5 day deadline period</Typography>
              <Typography variant="body2" color="error">Overdue Amount = 3,700</Typography>
              <Typography variant="body2">Additional Security Required = 7,400</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Typography variant="body2" color="error" sx={{ marginRight: '5px' }}>
                ▼ 47%
              </Typography>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <EmailIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
            <Typography variant="h6" component="span">
              Sent email
            </Typography>
            <Box sx={{ backgroundColor: '#E3F2FD', padding: '5px', borderRadius: '5px', textAlign: 'center' }}>
              <Typography variant="body2" color="primary">
              <Button variant="outlined">View Email</Button>
              </Typography>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <OutlinedFlagIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
            <Typography variant="h6" component="span">
              Moved Out of Default
            </Typography>
            <Typography>12-02-2024</Typography>
            <Box sx={{ backgroundColor: '#E8F5E9', padding: '5px', borderRadius: '5px' }}>
              <Typography variant="body2" color="success">
                ▲ 60%
              </Typography>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <ErrorIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} sx={{ padding: '10px', borderRadius: '10px' }}>
            <Typography variant="h6" component="span">
              Margin Call
            </Typography>
            <Typography>10-02-2024</Typography>
            <Box sx={{ backgroundColor: '#FFEBEE', padding: '5px', borderRadius: '5px' }}>
              <Typography variant="body2">Moved to 5 day deadline period</Typography>
              <Typography variant="body2" color="error">Overdue Amount = 5,000</Typography>
              <Typography variant="body2">Additional Security Required = 10,000</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Typography variant="body2" color="error" sx={{ marginRight: '5px' }}>
                ▼ 44.4%
              </Typography>
            </Box>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TestComponent;
