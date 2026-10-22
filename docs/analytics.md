# EXP Calculator analytics

Umami website: `torturado.github.io` (`fc66d744-3b0f-4898-bf02-a4a4b24aaffc`).

[Open the dashboard](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc?date=30day).

## Collection

The tracker runs only on `torturado.github.io`, records pageviews and Core Web
Vitals, and excludes URL fragments. Search parameters remain enabled for UTM
attribution. Local previews do not send analytics. No balances, gem targets,
target dates, or input text are sent in custom event properties.

Events emitted before the tracker finishes loading are buffered in memory, up
to 50 events. Tracking errors do not interrupt calculations. Automatic result
updates do not generate completion events.

## Events

- `calculator_started`: first input edit, slider change, or rank preset per page
  load. Property: `mode` (`gems` or `exp`).
- `calculation_completed`: one successful gem calculation submission.
  Properties: `mode`, `has_goal`, `has_target_date`, `has_duration`.
- `goal_calculation_completed`: successful submission with Goal Gems or
  Additional Gems. Same properties as `calculation_completed`.
- `market_calculation_completed`: a valid EXP/cofres input loses focus. Consecutive
  identical field/value confirmations are ignored. Properties: `mode`, `input`.
- `calculator_mode_changed`: switching between gems and EXP/cofres.
  Property: `mode`.
- `rank_selected`: a Discord rank preset is selected. Property: `rank`.
- `rank_multiplier_selected`: a preset multiplier is selected.
  Properties: `rank`, `multiplier`.
- `validation_failed`: a gem calculation submission fails validation.
  Properties: `mode`, `fields` (field names only).

## Saved goals and funnel

[Goals](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/goals?date=30day):

- Cálculo de gemas completado → `calculation_completed`.
- Objetivo de gemas calculado → `goal_calculation_completed`.
- Conversión EXP o cofres completada → `market_calculation_completed`.

[Funnel](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/funnels?date=30day):

`/` pageview → `calculator_started` → `calculation_completed`.
The maximum interval between consecutive steps is 15 minutes.

Definitions were saved in Umami on 2026-10-22. The pre-existing `nose` goal was
preserved. New custom events start arriving after the instrumented site is
published; saved goals and funnels do not create historical events.

## Saved segments

[Segments](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/segments):

- Móvil: device equals `mobile`.
- Desde Google: referrer contains `google.`. This filter identifies Google
  referrals, without assuming they are all organic traffic.
- Usuarios que calculan gemas: event equals `calculation_completed`.

## Journey, retention, and campaigns

[Journey](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/journeys?date=30day)
already uses pageviews and events. Start with three steps and All actions to
compare entry pages, calculator interaction, and completion. The current data
has little activity beyond the entry step; the new custom events will make
calculator journeys more informative.

[Retention](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/retention)
is built into Umami and needs no extra frontend event. Review return rates at
days 1, 7, and 28 for each daily cohort in the selected month. September's cohorts
already show some returns, but individual cohorts contain only a few visitors.
These are anonymous browser-level metrics, not a count of known people across
devices.

[UTM](https://umamita.derrumbar.top/websites/fc66d744-3b0f-4898-bf02-a4a4b24aaffc/utm?date=30day)
is collected automatically from tagged incoming links. Use lowercase names
consistently and keep internal navigation links free of UTM tags.

Example link for sharing on Discord:

```text
https://torturado.github.io/?utm_source=discord&utm_medium=community&utm_campaign=calculator_v2_4
```

This example has not been posted or used to create artificial campaign traffic.
