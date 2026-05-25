# LeadNest — Full Build Specification
### Version 1.0 | Base Plan | For Antigravity

---

## What You Are Building

LeadNest is an AI-powered WhatsApp lead nurturing platform built exclusively for Indian real estate agents. It connects to an agent's WhatsApp Business number, automatically responds to incoming leads, qualifies them, nurtures them over time, books site visits, and manages everything in one dashboard — without the agent needing to lift a finger.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Builder | Antigravity (Google) |
| AI Brain | Gemini API (Flash model) |
| Messaging | WhatsApp Cloud API (Meta) |
| Payments | UPI / Razorpay |
| Domain | leadnest.in |
| Language | English + Hindi + Regional (auto detect) |

---

## User Types

1. **Agent (Client)** — The estate agent who pays and uses LeadNest
2. **Lead** — The person enquiring about a property via WhatsApp
3. **Admin (You)** — Backend access to manage all accounts

---

## Core Features — Base Plan

### 1. Agent Onboarding Flow (Zero Human Intervention)

When an agent signs up:

**Step 1 — Account Creation**
- Agent enters: Name, Email, Password, Phone number
- OTP verification on phone
- Account created automatically

**Step 2 — Business Setup Form**
Agent fills in:
- Business / Agency name
- City and areas they operate in
- Property types: Residential / Commercial / Both
- Language preference: English / Hindi / Regional
- Preferred tone: Professional / Friendly / Neutral
- Office hours (e.g. 9am to 7pm)
- Out of office auto reply message

**Step 3 — WhatsApp Connection**
- Step by step guided screen inside dashboard
- Agent connects their WhatsApp Business number via Meta Embedded Signup
- System verifies connection
- Confirmation screen: "Your WhatsApp is now connected"

**Step 4 — Property Upload**
- Agent adds at least one property to go live
- Bot activates automatically once first property is added

**Step 5 — Go Live**
- Dashboard unlocks fully
- Bot is ON by default
- Agent sees: "LeadNest is now active on your WhatsApp"

---

### 2. Dashboard — Responsive (Mobile + Desktop)

#### Main Navigation
- Inbox
- Leads
- Properties
- Appointments
- Analytics
- Settings
- WhatsApp Balance

---

#### Inbox Screen

- Shows all active WhatsApp conversations in real time
- Each conversation shows: Lead name, last message, time, lead status (Hot / Warm / Cold)
- Agent can tap any conversation to read full thread
- **Manual Takeover button** — agent jumps in, bot pauses on that thread
- **Resume Bot button** — hands back to bot
- Unread message count badge
- Filter by: All / Hot / Warm / Cold / Unread / Bot Active / Manual

---

#### Leads Screen

Pipeline view with columns:
- New
- Contacted
- Qualified
- Appointment Booked
- Site Visit Done
- Closed (Won)
- Closed (Lost)

Each lead card shows:
- Name and phone
- Property interested in
- Budget mentioned
- Last activity time
- Lead score (1-10, AI generated)
- Type: Buyer / Renter

Agent can manually move leads between columns. Bot moves them automatically based on conversation progress.

---

#### Properties Screen

Agent manages their property listings here.

**Add Property Form:**
- Property name / title
- Type: Sale or Rental
- Category: Apartment / Villa / Plot / Commercial / Office
- Location (area, city)
- Price (sale) or Rent per month
- Size (sq ft / BHK)
- Description (bot uses this to answer questions)
- Status: Active / Sold / Rented / On Hold
- Media upload: Photos (up to 10), Video link, PDF brochure

Bot automatically references active properties when talking to leads. If a property is marked Sold or Rented, bot stops showing it.

---

#### Appointments Screen

List of all booked site visits showing:
- Lead name and phone
- Property name
- Date and time
- Status: Upcoming / Done / Cancelled / No Show

When appointment time passes:
- Bot sends agent a WhatsApp message:
  > "Site visit with [Lead Name] for [Property] was today. How did it go?"
  > 
  > Reply with:
  > 1 — Interested, continue nurturing
  > 2 — Follow up in 7 days
  > 3 — Not interested, close lead

Agent replies with 1, 2, or 3. Bot acts instantly.

Also shows notification inside dashboard.

---

#### Analytics Screen

- Total leads this month
- Hot / Warm / Cold breakdown
- Conversations handled by bot
- Appointments booked
- Messages sent and received
- WhatsApp balance remaining
- Add-on messages used vs limit

Simple visual charts. Nothing complex.

---

#### Settings Screen

- Edit business details
- Edit property types and areas
- Change bot tone
- Update office hours
- Bot ON / OFF master toggle
- Change password
- Connect / reconnect WhatsApp
- Manage notification preferences

---

#### WhatsApp Balance Screen

- Current prepaid balance (in ₹)
- Transaction history (top-ups and deductions)
- Top-up button (UPI / Razorpay)
- Low balance alert threshold setting
- Automatic low balance notification at ₹50 remaining

---

### 3. The AI Bot — Full Conversation Flow

#### Language Detection
Bot detects language of first message automatically.
- If Hindi → responds in Hindi
- If English → responds in English
- If Regional (Gujarati, Marathi, Telugu, etc.) → responds in same language
- Can handle mixed Hindi-English (Hinglish)

---

#### Flow 1 — New Lead Inbound (First Message)

Lead messages the agent's WhatsApp for the first time.

Bot responds within seconds:

> "Hello! 👋 Welcome to [Agency Name]. I'm here to help you find your perfect property.
> 
> Are you looking to Buy or Rent?"

Lead replies. Bot continues:

> "Great! What type of property are you looking for?
> Apartment / Villa / Plot / Commercial"

Then:
> "Which areas or localities are you considering?"

Then:
> "What is your approximate budget?"

Then:
> "When are you planning to move or invest? 
> Immediately / Within 3 months / Just exploring"

Bot now has enough to qualify the lead. Gemini AI scores them 1-10 based on:
- Budget match with available properties
- Timeline urgency
- Engagement quality

Lead is tagged Hot / Warm / Cold automatically.

---

#### Flow 2 — Property Matching

After discovery, bot shares matching properties from the agent's active listings:

> "Based on what you've shared, here are some options that might interest you:"

Sends property details — name, location, price, description, and up to 3 photos.

If lead asks questions about a specific property:
> "The apartment is on the 4th floor, faces east, and has covered parking. Would you like to schedule a visit?"

Bot answers from the property description the agent has uploaded. If it doesn't know the answer:
> "That's a great question. Let me check with the team and get back to you shortly."

Then notifies agent in dashboard.

---

#### Flow 3 — Appointment Booking

When lead shows interest:

> "Wonderful! Let's schedule a site visit for you.
> 
> Which day works best for you this week?"

Lead suggests day. Bot checks agent's available hours and confirms:

> "Perfect! Your visit is confirmed for [Day] at [Time] for [Property Name].
> 
> Address: [Property Address]
> 
> We'll send you a reminder the day before. See you then! 🏠"

Appointment is created in dashboard automatically.

---

#### Flow 4 — Reminders

Day before appointment — bot sends lead:
> "Reminder: Your site visit for [Property] is tomorrow at [Time].
> 
> Address: [Address]
> 
> Reply CONFIRM to confirm or RESCHEDULE if you need to change."

If lead replies RESCHEDULE — bot handles rebooking automatically.

These use WhatsApp Utility Templates (₹0.32 per conversation window — deducted from agent's balance).

---

#### Flow 4B — 23 Hour Window Keep-Alive Strategy

Meta's WhatsApp Cloud API allows free messaging within 24 hours of the lead's last message. LeadNest maximises this window strategically.

**Rule:**
At exactly 23 hours after the lead's last inbound message — if the conversation window is still open AND the bot has not sent a message in the last 1 hour — bot automatically sends a soft keep-alive message.

**Why 23 hours and not 23:30?**
Gives the lead a full 1 hour to reply before the window closes. If they reply, a fresh 24 hour window opens. Free messaging continues.

**Keep-alive messages (rotate, never repeat same message twice in a row):**
- "Just checking in — did you get a chance to look at the property details I shared? 😊"
- "Hi [Name]! Is there anything else you'd like to know about the property?"
- "We have a few more options that just came in. Would you like me to share them?"
- "[Name], happy to answer any questions you might have before making a decision!"
- "Hi [Name]! The property you liked is still available. Want to schedule a quick visit this week?"

**What happens after:**
- Lead replies → fresh 24 hour window opens → free messaging continues → no template cost
- Lead does not reply → window closes → next outreach uses paid nurturing template (Flow 5)

**Implementation rule:**
System must track timestamp of every inbound lead message per conversation. At T+23hours trigger keep-alive if:
1. No inbound message from lead in last 23 hours
2. No outbound bot message in last 1 hour
3. Conversation is not in Manual Takeover mode
4. Lead is not marked Closed

This logic runs as a background job checking every 15 minutes across all active conversations.

---

#### Flow 5 — Nurturing (Warm and Cold Leads)

For leads who went quiet:

After 3 days of silence — bot sends:
> "Hi [Name]! Still looking for a property in [Area]? We have some new options that just came in. Would you like to take a look?"

After 7 days:
> "Hi [Name]! Just checking in. Are you still in the market or has your situation changed? Happy to help whenever you're ready."

After 14 days:
> "Hi [Name]! We have a great [property type] in [area] within your budget that I thought you'd love. Want me to share the details?"

All nurturing messages use pre-approved templates. Cost deducted from agent's WhatsApp balance.

---

#### Flow 6 — Out of Office

If lead messages outside office hours:
> "Hi! Thanks for reaching out to [Agency Name]. Our team is currently unavailable but your message is important to us. We'll get back to you first thing tomorrow morning. In the meantime, feel free to tell me what you're looking for and I'll make sure the right person follows up with you! 😊"

Bot still collects lead details even out of hours. Nothing is lost.

---

#### Flow 7 — Bot Pause (Manual Takeover)

When agent takes over a conversation manually:
- Bot stops responding to that thread immediately
- Agent sees "Manual Mode" badge on that conversation
- When agent clicks "Resume Bot" — bot takes over again

---

### 4. WhatsApp Message Limits

**Base Plan: 5,000 messages per month per agent**

Counter visible in dashboard at all times.

At 80% usage (4,000 messages):
> Dashboard notification: "You've used 80% of your monthly messages."

At 100% (5,000 messages):
> Bot pauses. Agent notified.
> "You've reached your monthly message limit. Purchase an add-on to continue."

**Add-On Packages (purchased inside dashboard):**
| Package | Messages | Price |
|---|---|---|
| Small | +1,000 | ₹99 |
| Medium | +3,000 | ₹249 |
| Large | +5,000 | ₹399 |

Add-ons activate instantly on purchase.

---

### 5. Payments

**Subscription Plans:**
| Plan | Price |
|---|---|
| Monthly | ₹999/month |
| Annual | ₹799/month (₹9,588 billed upfront) |

**Payment Methods:**
- UPI (GPay, PhonePe, Paytm)
- Debit / Credit card
- Net banking

**WhatsApp Balance Top-up:**
- Minimum top-up: ₹100
- Adds to prepaid balance
- Used only for outbound template messages Meta charges

**On failed payment:**
- 3 day grace period
- Bot continues working
- Daily reminder to agent
- After 3 days — bot pauses, dashboard still accessible

---

### 6. Admin Dashboard (Your View)

Separate login for you as admin.

Shows:
- All agents and their status (Active / Trial / Paused)
- Revenue this month (monthly + annual breakdown)
- Total messages sent across platform
- API costs this month (Gemini + Meta)
- Profit this month
- Agents who are low on WhatsApp balance
- Agents approaching message limit
- New signups today / this week

Ability to:
- Manually activate or pause any account
- Adjust message limits
- See any agent's conversation logs
- Issue manual credits if needed
- Export data

---

### 7. Notification System

**For Agent:**
- New lead arrived
- Hot lead detected
- Appointment booked
- Appointment reminder (day before)
- Post site visit follow-up prompt
- Low WhatsApp balance (₹50 remaining)
- Message limit at 80% and 100%
- Payment failed
- Payment successful

**Delivery method:**
- In-app notification (bell icon)
- WhatsApp message to agent's own registered phone number

---

### 8. Gemini AI — System Prompt Logic

Every conversation runs through Gemini Flash API with this context injected:

- Agent's business name
- Agent's areas and property types
- Agent's tone preference
- Agent's office hours
- Full list of agent's active properties with details
- Lead's conversation history (last 6 messages only — to control token cost)
- Current date and time
- Instruction to detect and match language of lead

Gemini generates the next bot response based on all this context.

**Hard rules for Gemini (injected in system prompt):**
- Never make up property details not in the listing
- Never promise prices without agent confirmation
- Never discuss competitor agencies
- Always stay on topic (real estate only)
- If unsure — say "Let me check and get back to you"
- Always be warm, helpful, and professional
- Never send more than one message at a time

---

### 9. Security

- All passwords hashed
- OTP verification on signup and login
- Agent can only see their own data
- Admin has separate secure login
- WhatsApp tokens stored encrypted
- Gemini API key stored server-side only, never exposed to client

---

### 10. Error Handling

- If WhatsApp API fails — log error, retry after 60 seconds, notify admin
- If Gemini API fails — send fallback message to lead: "Thanks for your message! We'll get back to you shortly."
- If payment fails — grace period as described above
- All errors logged in admin dashboard

---

## Screens Summary

| Screen | Who sees it |
|---|---|
| Landing / Signup | New agents |
| Onboarding flow (5 steps) | New agents |
| Inbox | Agent |
| Leads pipeline | Agent |
| Properties manager | Agent |
| Appointments | Agent |
| Analytics | Agent |
| Settings | Agent |
| WhatsApp balance | Agent |
| Add-on purchase | Agent |
| Admin dashboard | You only |

---

## What Is NOT In This Version

The following are intentionally excluded from V1. They will be built later:

- Meta Ads integration
- Instagram DM handling
- Social media posting / scheduling
- Lead generation services
- Team / multi-agent accounts
- Mobile app (iOS / Android)
- Custom domain per agent
- CRM integrations

---

## Launch Checklist Before First Client

- [ ] WhatsApp Cloud API account active
- [ ] Gemini API key active
- [ ] Meta message templates submitted and approved (appointment reminder, nurture follow-up, re-engagement)
- [ ] Razorpay / UPI payment active
- [ ] Test full flow end to end with a dummy agent account
- [ ] Test bot in English, Hindi, and at least one regional language
- [ ] Test manual takeover and resume
- [ ] Test add-on purchase flow
- [ ] Test low balance alert
- [ ] Admin dashboard showing correct data
- [ ] leadnest.in domain connected

---

## First 3 Templates to Get Meta Approved

### Template 1 — Appointment Reminder (Utility)
> "Hi {{1}}, this is a reminder that your property visit for {{2}} is scheduled for {{3}} at {{4}}. 
> Reply CONFIRM to confirm or RESCHEDULE to change your appointment."

### Template 2 — Nurture Follow-up (Marketing)
> "Hi {{1}}, we have some new properties in {{2}} that match your requirements. Would you like to take a look? Reply YES and I'll share the details right away."

### Template 3 — Re-engagement (Marketing)
> "Hi {{1}}, it's been a while! Are you still looking for a property in {{2}}? We're here to help whenever you're ready. Just reply and we'll pick up right where we left off."

---

*Built by LeadNest | leadnest.in*
*Version 1.0 — Base Plan*
