---
sidebar_position: 2
---

# Pagination

> Original pagination guide: [MERGE](https://docs.merge.dev/basics/pagination/)

Learn how to paginate bulk data requests to the Merge API.

## Overview

Any data you interact with via the Merge API is able to be paginated. Pagination is specified via the `cursor` and `page_size` query parameters. Ensure that all query parameters, aside from `cursor` and `page_size`, remain consistent across pagination to maintain the integrity of your data retrieval. The `next` and `previous` cursors are attached to paginated API responses. Their values inform the `cursor` where to point to next.

## Query parameters

`cursor` *String* (Optional)

Denotes the starting position in the data list from where a paginated API endpoint should return bulk data. Get this value from the `next` or `previous` property of any previous paginated response. When `next` or `previous` is null there are no more pages to paginate through.

`page_size` *Integer* (Optional)

Limit on number of objects to return per request. Defaults to 30, maximum of 100.

## Sample HTTP request

Below is an sample request using pagination in `HTTP`. The `page_size` is set to 20, and the `cursor` is pointing to a value for the next page.

```curl
GET /api/ats/v1/candidates?page_size=20&cursor=cD0yMDIxLTA3LTI4KzE5JTNBMzglM0EzNi42NzUxNTMlMkIwMCUzQTAw 
Host: api.merge.dev
X-Account-Token: {Linked Account Token Here}
Authorization: Bearer {Production API Key Here}
```

