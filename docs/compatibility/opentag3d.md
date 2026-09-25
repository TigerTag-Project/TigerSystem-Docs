# OpenTag3D

## What it is

**[OpenTag3D](https://github.com/GooborgStudios/OpenTag3D)** is a
community-driven open tag standard for filament spools: an NDEF payload sized
to fit an NTAG215, no encryption, published spec, open supporter list. Like
TigerTag, it exists because the industry was filling up with one proprietary
format per printer brand, and it is explicit that a tag must work **entirely
offline**. In spirit it is a close cousin.

Both standards also define an online layer, and both call it a **Web API** —
which is where the two designs diverge, on purpose and in opposite directions.

## Two designs, side by side

| Aspect | TigerTag | OpenTag3D |
|---|---|---|
| What the chip stores to reach the online layer | a **catalogue product id** | an **"Online Data URL"** — the address itself |
| Who answers it | **one endpoint, every brand** | one endpoint per tag, hosted by whoever wrote it |
| Role of the online layer | the **update channel**: corrections reach spools already shipped | **supplemental by design** — the spec states it "will NEVER be relied upon for printer functionality" |
| Regulatory documents | TDS · MSDS · RoHS · REACH · EN71 · food contact, per product | not in the schema — the Web API carries photos, price, product links, QA status, notes |
| Copy of the tag data online | yes, the full profile | yes, `tag_data` — **optional**, like every field but the version |
| Origin proof | optional — a [TigerTag+ Certified](../products/tigertag-plus.md) is signed and verified offline | none, deliberately: the spec rejects encryption as "unsuitable for an open source standard" |

## What follows from an id versus an address

Neither approach is an accident, and each buys something.

Storing the **address** keeps the tag self-sufficient: whoever writes it
decides where its data lives, and answers to nobody. The cost is that the
address is written into the chip, under the payload's byte budget, and a chip
cannot be re-pointed once it is in a customer's hands — if that host moves or
stops answering, the link is what breaks.

Storing an **id** looks like it puts a shared endpoint in the path — and it
would, if the reference were ours to withhold. It is not: the whole catalogue
is published as a single file, [`id_catalog.json`](https://github.com/TigerTag-Project/TigerTag-RFID-Guide/blob/main/database/id_catalog.json), every id of every
filament in the database, refreshed through the day and free for anyone to
copy. A reader can hold its own mirror and resolve ids with no network at all.

So the id buys what the address cannot. The chip never holds a location, so it
stays valid whatever happens to any host; a reader implements one endpoint and
it works for filament it has never seen; a manufacturer corrects data six
months after the spools left the factory; and the resolution itself can be
fully offline, on a copy that anybody may keep.

The [signature](../products/tigertag-plus-certified.md) is the other
consequence. Because a TigerTag+ Certified signs the chip's own UID, the data
can improve online while the spool keeps proving where it came from — offline,
on the customer's own phone.

## Interoperability

TigerTag chips are **never write-locked**. If you prefer OpenTag3D — or any
other format — you are free to rewrite a factory chip into it. That is the same
position we hold for [OpenSpool](./openspool.md), and for the same reason: the
spool belongs to whoever bought it.

---

**◀ Previous:** [OpenSpool](./openspool.md) · **▲ [Documentation index](../../README.md)** · **Next ▶** [Developers](../developers/README.md)

**Related:** [The Web API](../developers/web-api.md), [TigerTag+ Certified](../products/tigertag-plus-certified.md)
